import React, { useState, useCallback } from "react";

function useInputs(initialForm: any) {
  const [form, setForm] = useState(initialForm)

  const onChange = useCallback((e: any) => {
    const { name, value } = e.currentTarget
    setForm((form: any) => ({ ...form, [name]: value }))
  }, [])
  const onReset = useCallback(() => setForm(initialForm), [initialForm])
  return [form, onChange, onReset]
}

export default useInputs