import { createEffect, createResource, createSignal } from "solid-js";
import type { Media, SearchMediaResponse } from "../../../api/anilist";
import Label from "../../generic/Label";
import { getMediaCharacters, searchMedia } from "../../../api/anilist";
import { InputDropDown, DropDownOptionWithImage } from "../../generic/DropDown";
import { Char } from "../../../api/list";

let timer: number;
export function debounce(func: () => any, timeout: number) {
  clearTimeout(timer);
  timer = setTimeout(() => func(), timeout);
}

const [selected, setSelected] = createSignal<Media>();

const [
  mediaCharacters,
  { refetch: refetchMediaCharacters, mutate: mutateChars },
] = createResource<Char[] | undefined>(async () => {
  if (!selected()) return undefined;
  const m = await getMediaCharacters(selected()?.id!);
  if (!m) {
    console.log("no media");
    return undefined;
  }

  return m.map((c) => {
    return {
      id: c.id,
      name: c.name.full,
      image: c.image.large,
    } as Char;
  });
});

const [filterV, setFilter] = createSignal<(c: Char) => boolean>(() => true);

export const FilterCharacter = filterV;
export const MediaCharacters = mediaCharacters;

type Option = { value: string; label: string; image?: string };

export default () => {
  const [getV, setV] = createSignal("");
  const [options, setOptions] = createSignal<Option[]>([]);

  const fetchMedia = async () => {
    try {
      if (!getV() || getV() == "") return undefined;
      const m = await searchMedia(getV(), 5);
      if (!m) console.log("no media");
      setOptions(
        m.data.Page.media.map((m) => ({
          value: m.id,
          label: m.title.romaji,
          image: m.coverImage.large,
        }))
      );
      return m;
    } catch (e) {
      alert(e);
      return undefined;
    }
  };

  const [media, { refetch: refetchMedia }] = createResource<
    SearchMediaResponse | undefined
  >(fetchMedia);

  createEffect(async () => {
    if (selected()) {
      refetchMediaCharacters();
    }

    setFilter(() => (c: Char) => {
      if (!mediaCharacters()) return true;
      return !!mediaCharacters()?.find((mc) => mc.id == c.id);
    });
  });

  const icon = () => (
    <span
      class="i-ph-television text-lg"
      onClick={() => {
        setSelected(undefined);
        setV("");
        setFilter(() => () => true);
        mutateChars(undefined);
      }}
      classList={{
        "text-emerald": !!selected(),
      }}
    ></span>
  );

  const onChange = (v: Option): void => {
    const m = media()?.data.Page.media.find((m) => m.id == v.value);
    setV((p) => m?.title.romaji || p);
    setSelected(m!);
  };

  return (
    <Label text="Filter by media">
      <InputDropDown
        onInput={(e: string) => {
          setV(e);
          debounce(() => refetchMedia(), 200);
        }}
        onEnter={(e: string) => {
          setV(e);
          refetchMedia();
        }}
        placeholder="Made in Abyss"
        value={getV}
        options={options()}
        onChange={onChange}
        icon={icon}
      >
        {(option: Option) => (
          <DropDownOptionWithImage label={option.label} image={option.image} />
        )}
      </InputDropDown>
    </Label>
  );
};
