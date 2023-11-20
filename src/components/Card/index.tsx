// Styles
import * as S from "./styles";

// Interface
interface CardProps {
  title: string;
  subtitle: string;
  color: string;
}

const Card = ({ title, subtitle, color }: CardProps) => {
  return (
    <S.Container>
      <S.Stripe color={color} />
      <S.Content>
        <S.SubTitle color={color}>{subtitle}</S.SubTitle>
        <S.Title>{title}</S.Title>
      </S.Content>
    </S.Container>
  );
};

export default Card;
