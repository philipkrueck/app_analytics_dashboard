import React from 'react'

export default function SegmentedControl(props) {
    function handleSelectionDidChange(e) {
        props.onChange(e.target.value);
    }

    return (
        <div>
            {
                props.controls.map((control) => {
                    return (
                        <label key={control}>
                            <input 
                                type="radio" 
                                value={control} 
                                id={control}
                                checked={control === props.selectedControl}
                                onChange={handleSelectionDidChange}
                            />
                        {control}
                    </label>)
                })
            }
        </div>
    )
}
