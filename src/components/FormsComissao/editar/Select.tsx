
export type OptionsType = {
	label: string;
	value: number;
};

type SelectType = {
    options: OptionsType[],
    preSelect: number,
    disabled: boolean
}

const Select = ({
    preSelect,
    disabled,
    options
}: SelectType) => {
	return (
		// { `w-full rounded-md border-0 bg-[#B7B7B7] text-sm outline-none` + 
        //     disabled 
        //     ? 'bg-[#b2b2b2]' 
        //     :'bg-amber-900'}
        //     disabled={disabled}
		<select
			name="areas"
			id="areas"
			className={`w-full rounded-md border-0 ${disabled ? 'bg-[#B7B7B7]' : 'bg-white'}  text-sm outline-none`}
		>
			{options.map((area, index) => {
				return (
					<option value={area.label} key={index} selected={preSelect==index} >
						{area.label}
					</option>
				);
			})}
		</select>
	);
};

export default Select;