export default function Dropdown({ 
    id, 
    label, 
    options, 
    defaultOptionLabel = "All Options", 
    value, 
    onChange 
}) {
    return (
        <div className="flex-1">
            <label htmlFor={id} className="block text-xs font-medium text-gray-700 mb-1">
                {label}
            </label>
            <select
                id={id}
                value={value}
                onChange={onChange}
                className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700"
            >
                {/* Default empty/reset option */}
                <option value="">{defaultOptionLabel}</option>
                
                {/* Dynamic options mapped from props */}
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}