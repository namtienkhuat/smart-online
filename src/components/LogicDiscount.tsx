export default function LogicDiscount({ item, discount }: any) {
    let x = discount.array.find((element: any) => element.name == item.name);
    console.log(x);

    return (
        <h3 className="pt-[12px] text-[#EB001B] text-[14px] font-[500]">
            {x ? x.percent : item.percent}
        </h3>
    );
}
