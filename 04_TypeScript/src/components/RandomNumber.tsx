type RandomType = {
    value: number;
};

type PositiveNumber = RandomType & {
    isPositive: boolean;
    isNegative?: never;
    isZero?: never;
};

type NegativeNumber = RandomType & {
    isPositive?: never;
    isNegative: boolean;
    isZero?: never;
};

type ZeroNumber = RandomType & {
    isPositive?: never;
    isNegative?: never;
    isZero: boolean;
};

type RandomNumberProp = PositiveNumber | NegativeNumber | ZeroNumber;

export const RandomNumber = ({ value, isPositive, isNegative, isZero }: RandomNumberProp) => {
    return (
        <div>
            {value} {isPositive && 'Positive'} {isNegative && 'Negative'} {isZero && 'Zero'}
        </div>
    );
};
