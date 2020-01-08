import React, { useState, useCallback } from "react";

function useInputs(initialForm: any) {
  const [form, setForm] = useState(initialForm)

  const onChange = useCallback((e: any) => {
    const { name, value } = e.currentTarget
    setForm((form: any) => ({ ...form, [name]: value }))
  }, [])
  const reset = useCallback(() => setForm(initialForm), [initialForm])
  return [form, onChange, reset]
}

export default useInputs