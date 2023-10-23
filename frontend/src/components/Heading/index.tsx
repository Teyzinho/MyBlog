import * as Styled from './styles';

export type HeadingProps = {
  children: React.ReactNode;
  color_dark?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'small' | 'medium' | 'big' | 'huge';
  uppercase?: boolean;
};

export const Heading = ({
  children,
  color_dark = true,
  as = 'h1',
  size = 'huge',
  uppercase = false,
}: HeadingProps) => {
  return (
    <Styled.Title
      color_dark={color_dark}
      as={as}
      size={size}
      uppercase={uppercase}
    >
      {children}
    </Styled.Title>
  );
};
