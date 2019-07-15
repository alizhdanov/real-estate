import styled from 'styled-components';
import Link from 'next/link';
import gql from 'graphql-tag';

import StyledButton from './StyledButton';
// import AppartmentCardSlider from './AppartmentsCardSlider';
import { AppartmentCard_DataFragment } from '../generated/graphql';

const Wrapper = styled.article`
  padding: 15px;
  background-color: #fff;
`;

// const Slider = styled(AppartmentCardSlider)`
//   width: 100%;
//   margin-bottom: 1.75em;
// `;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: 1em;
`;

const Header = styled.h3`
  margin: 0 0 0.35em;
  font-weight: 300;
  font-size: 18px;
  color: #010101;
`;

// const TextLine = styled.p`
//   margin: 0;
//   color: #4e4e4e;

//   &:not(:last-child) {
//     margin-bottom: 0.25em;
//   }
// `;

const BottomLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 0.5em;
`;

const Price = styled.h4`
  margin: 0;
  font-size: 20px;
  font-weight: 300;
  color: #000;
`;

const Button = styled(StyledButton)`
  font-size: 16px;
`;

type Props = {
  data: AppartmentCard_DataFragment;
  className?: string;
};

const AppartmentCard = ({ data, className }: Props) => {
  return (
    <Wrapper className={className}>
      <Image src={data.medias[0].url} alt="" />
      <Header>{data.title}</Header>
      <BottomLine>
        <Price>{data.price.amount} грн. / сутки</Price>
      </BottomLine>
      <Link href={`/estate/${data.id}`}>
        <Button>Больше</Button>
      </Link>
    </Wrapper>
  );
};

AppartmentCard.fragments = {
  data: gql`
    fragment AppartmentCard_data on Estate {
      id
      title
      price {
        amount
      }
      medias {
        url
      }
    }
  `,
};

export default AppartmentCard;
