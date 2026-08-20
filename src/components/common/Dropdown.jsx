export default function Dropdown({
  id,
  label,
  options,
  defaultOptionLabel = 'All Options',
  value,
  onChange,
  className = '',
}) {
  return (
    <label htmlFor={id} className={`block w-full ${className}`}>
      <span className="mb-1.5 block text-xs font-medium text-slate-700">{label}</span>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="h-9 w-full rounded-md border border-slate-300 bg-white px-2.5 text-sm shadow-sm outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      >
        <option value="">{defaultOptionLabel}</option>
        {options.map((option) => {
          const optionValue = typeof option === 'string' ? option : option.value
          const optionLabel = typeof option === 'string' ? option : option.label

          return (
            <option key={optionValue} value={optionValue}>
              {optionLabel}
            </option>
          )
        })}
      </select>
    </label>
  )
}
