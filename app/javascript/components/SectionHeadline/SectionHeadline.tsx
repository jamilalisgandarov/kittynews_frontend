import * as React from "react";
import { Text } from "../Text/Text";
import './index.scss';

interface SectionHeadlineProps {
    label: string;
}

export const SectionHeadline:React.FC<SectionHeadlineProps> = ({label}) => {
  return <div className="section-headline">
      <Text variant="body1" fontWeight="bold">{label}</Text>
  </div>;
};
