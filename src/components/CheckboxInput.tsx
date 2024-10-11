import React, { useState } from "react";

type CheckInputType = {
	label: string;
	key?: number | string;
	id: string;
	disabled: boolean;
	isChecked: boolean;
	onChange: (isChecked: boolean) => void;
};

const CheckInput = ({
	label,
	key,
	disabled,
	id,
	isChecked,
	onChange,
}: CheckInputType) => {
	return (
		<div key={key}>
			<div className="flex items-center">
				<input
					className="hidden"
					type="checkbox"
					name={id}
					id={id}
					checked={isChecked}
					onChange={(e) => onChange(e.target.checked)}
					disabled={disabled}
				/>
				<label
					className={`flex cursor-pointer items-center ${
						!isChecked ? "text-[#4B00E0]" : "text-[#000]"
					} `}
					htmlFor={id}
				>
					<div
						className={`mr-2 flex h-3.5 w-3.5 items-center justify-center ${
							!isChecked
								? "border-[1px] border-[#4B00E0] bg-[#4B00E0]"
								: "border-[1px] border-[#4B00E0] text-[#fff]"
						}`}
					>
						{!isChecked && (
							<svg
								className="pointer-events-none h-2 w-3 fill-current text-white"
								viewBox="0 0 20 20"
							>
								<path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
							</svg>
						)}
					</div>
					<span className="text-sm font-medium">{label}</span>
				</label>
			</div>
		</div>
	);
};

export default CheckInput;
