import styled from 'styled-components'
import Coupon from '../../components/coupon/coupon.component'

export const CheckOutContainer = styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
        button {
            margin-left: auto;
            margin-top: 50px;
        }
`

export const CheckOutHeader = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`

export const HeaderBlockContainer = styled.div`
    text-transform: capitalize;
    width: 23%;

    &:last-child {
        width: auto;
    }
`

export const TotalContainer = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
`

export const CouponContainer = styled(Coupon)`
    margin-top: 30px;
    margin-left: auto;
`

export const TextWarningContainer = styled.div`
    text-align: center;
    margin-top: 40px;
    font-size: 24px;
    color: red;
`
