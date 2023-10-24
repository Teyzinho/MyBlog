import * as Styled from './styles';

export type MenuLinkProps = {
  children: React.ReactNode;
  link: string;
  isNewTab?: boolean;
};

export const MenuLink = ({
  children,
  link,
  isNewTab = false,
}: MenuLinkProps) => {
  return (
    <Styled.Container href={link} target={isNewTab ? '_blank' : '_self'}>
      {children}
    </Styled.Container>
  );
};
