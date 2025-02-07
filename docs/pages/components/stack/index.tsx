import React from 'react';
import {
  Stack,
  HStack,
  VStack,
  Button,
  Divider,
  Radio,
  RadioGroup,
  Slider,
  SelectPicker,
  useMediaQuery
} from 'rsuite';
import DefaultPage from '@/components/Page';
import ImportGuide from '@/components/ImportGuide';

const inDocsComponents = {
  'import-guide': () => (
    <ImportGuide components={['Stack', 'HStack', 'VStack']} hasCssComponents={['Stack']} />
  )
};

export default function Page() {
  return (
    <DefaultPage
      inDocsComponents={inDocsComponents}
      dependencies={{
        Stack,
        HStack,
        VStack,
        Button,
        Divider,
        Radio,
        RadioGroup,
        Slider,
        SelectPicker,
        useMediaQuery
      }}
    />
  );
}
