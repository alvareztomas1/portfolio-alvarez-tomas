export type Title = {
  title: string;
};

export type SubTitle = {
  subtitle: string;
};

export type Text = {
  text: string;
};

export type Redirect = Title & {
  href: string;
};

export type Image = {
  alt: string;
  href: string;
};
