interface GenerationInfo {
  name: string;
  start: number;
  end: number;
  notes?: string;
}

const GENERATIONS: GenerationInfo[] = [
  {
    name: "Gen 1",
    start: 1,
    end: 151,
  },
  {
    name: "Gen 2",
    start: 152,
    end: 251,
  },
  {
    name: "Gen 3",
    start: 252,
    end: 386,
  },
  {
    name: "Gen 4",
    start: 387,
    end: 493,
  },
  {
    name: "Gen 5",
    start: 494,
    end: 649,
  },
  {
    name: "Gen 6",
    start: 650,
    end: 721,
    notes: "Several sprites missing",
  },
  {
    name: "Gen 7",
    start: 722,
    end: 809,
    notes: "Several sprites missing",
  },
  {
    name: "Gen 8",
    start: 810,
    end: 898,
    notes: "Several sprites missing",
  },
  {
    name: "Gen 9",
    start: 899,
    end: 1025,
    notes: "Several sprites missing",
  },
  {
    name: "All (Gen 1-5)",
    start: 1,
    end: 649,
  },
];

export default GENERATIONS;
