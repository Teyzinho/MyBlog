import { Heading } from '../Heading';
import { LogoLink } from '../LogoLink';
import * as Styled from './styles';

export type HeaderProps = {
  showText?: boolean;
  blogName: string;
  blogDescription: string;
  logo: string;
};

export const Header = ({
  showText = true,
  blogName,
  blogDescription,
  logo,
}: HeaderProps) => {
  return (
    <Styled.Container>
      <LogoLink link="/" text={`${blogName}altText`} srcImg={logo} />

      {showText && (
        <Styled.Div>
          <Heading size="small">{blogName}</Heading>
          <p>{blogDescription}</p>
        </Styled.Div>
      )}
    </Styled.Container>
  );
};
