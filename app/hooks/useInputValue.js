import React, { useState } from 'react';

export const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue);
  const onChange = e => setValue(e);

  return { value, onChange };
};
