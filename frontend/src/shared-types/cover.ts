export type Cover = {
  data: {
    id: string;
    attributes: {
      name: string;
      alternativeText?: string | null;
      url: string;
    };
  };
};
