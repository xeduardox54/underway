import React, { useState } from 'react';

export const useListCargas = initialValue => {
  const [value, setValue] = useState(initialValue);

  return { value, setValue };
};
