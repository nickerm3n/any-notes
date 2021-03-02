import React, { useState } from 'react';

type Props = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export const SettingForm: React.FC<Props> = ({ children, onSubmit }) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};
