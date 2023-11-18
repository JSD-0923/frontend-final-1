import React, { useState } from 'react';
import styled from 'styled-components';
import Quantity from './Quantity';
import Divider from '@mui/material/Divider';
import CoralBtnIcon from '../CoralBtnIcon/CoralBtnIcon';
import { ReactComponent as Cart } from '../../static/icons/cart.svg';
import { ReactComponent as Star } from '../../static/icons/Star.svg';
import { ReactComponent as Starb } from '../../static/icons/Starb.svg';
import { ReactComponent as Wishlist } from '../../static/icons/wishlist.svg';
import { ReactComponent as Outline } from '../../static/icons/outline.svg';
import { SvgIcon } from '@mui/material';

const DetailsContainer = styled.div`
  padding-left: 24px;
`;

const Description = styled.div`
  .coach {
    color: #13101E;
    font-size: 34px;
    font-weight: 600;
    line-height: 44px;
  }

  .leather {
    color: #626262;
    font-size: 20px;
    font-weight: 600;
    line-height: 26px;
  }
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  padding-top: 32px;

  .how-many-rate {
    color: #B6B6B6;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }

  .stars {
    display: flex;
    align-items: flex-start;
    gap: 8px;

    .orange {
      width: 24px;
      height: 24px;
    }
  }
`;

const ProductPricing = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 16px;
  padding-top: 24px;

  .big {
    color: #171520;
    font-size: 40px;
    font-weight: 700;
    line-height: 52px;
  }

  .medium {
    color: #B6B6B6;
    text-align: right;
    font-size: 34px;
    font-weight: 600;
    line-height: 26px;
    text-decoration: line-through;
  }

  .small {
    color: #FF404B;
    text-align: right;
    font-size: 20px;
    font-weight: 600;
    line-height: 26px;
  }
`;

const QuantityContainer = styled.div`
  padding-top: 162px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  .quantity {
    color: #13101E;
    font-size: 20px;
    font-weight: 600;
    line-height: 26px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 24px;
  padding-Top:186px;
`;

export default function Details() {
    const [value, setValue] = useState(4);

    return (
        <DetailsContainer>
            <Description>
                <div className='coach'>Coach</div>
                <div className='leather'>Leather Coach Bag with adjustable straps.</div>
            </Description>

            <Rating>
                <div className='orange'>
                    <SvgIcon><Star /></SvgIcon>
                </div>
                <div className='orange'>
                    <SvgIcon><Star /></SvgIcon>
                </div>
                <div className='orange'>
                    <SvgIcon><Star /></SvgIcon>
                </div>
                <div className='orange'>
                    <SvgIcon><Star /></SvgIcon>
                </div>
                <div className='black'>
                    <SvgIcon><Starb /></SvgIcon>
                </div>
                <div className='how-many-rate'>(250) Ratings</div>
            </Rating>

            <ProductPricing>



                <div className='big'>$54.69</div>
                <div className='medium'>$78.66</div>
                <div className='small'>50%OFF</div>

            </ProductPricing>

            <Divider />
            <br />

            <QuantityContainer>
                <div className='quantity'>Quantity:</div>
                <div className='quantityplus'>
                    <Quantity></Quantity>
                </div>
            </QuantityContainer>

            <br />

            <ButtonContainer>
                <CoralBtnIcon label={"Add to cart"} type={"contained"} color={"primary"} endIcon={<SvgIcon><Outline /></SvgIcon>} />
                <CoralBtnIcon label={"Add to wishlist"} type={"outlined"} Icon={<SvgIcon> <Wishlist />  </SvgIcon>} />
            </ButtonContainer>
        </DetailsContainer>
    );
}