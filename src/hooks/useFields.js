import React, { useState } from 'react'

const useFields = (initialState) => {
       const [formData, setFormData] = useState(initialState);
         const handleChange = (e) => {

            const { name, value } = e.target;
                setFormData(formData => ({
                    ...formData,
                    [name]: value
                }))
            }
            const resetFormData = () => {
                setFormData(initialState);
            }
        return [formData, handleChange, resetFormData];
}

export default useFields;