
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
		<select
			name="areas"
			id="areas"
			className={ 'width-[100%] border-1 bg-white, h-auto rounded-[0.375rem] border-gray-300 text-[0.875rem]' + 
            disabled 
            ? 'bg-[#b2b2b2]' 
            :'bg-white'}
            disabled={disabled}
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