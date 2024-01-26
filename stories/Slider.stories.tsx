import type { Meta, StoryObj } from '@storybook/html';
import type { IInputs, IOutputs } from '../FluentUISlider/generated/ManifestTypes';
import { useArgs, useEffect } from "@storybook/preview-api";
import { ComponentFrameworkMockGenerator, DecimalNumberPropertyMock, EnumPropertyMock, StringPropertyMock, WholeNumberPropertyMock } from '@shko.online/componentframework-mock';
import { FluentUISlider as Component } from '../FluentUISlider';


interface StoryArgs {
  isVisible: boolean;
  isDisabled: boolean;
  input: number;
  min: number;
  max: number;
  step: number;
  size: "small" | "medium";
  vertical: "false" | "true";
  showValue: "false" | "true";
  showTooltip: "false" | "true";
  showMinMax: "false" | "true";
  prefix: string;
  suffix: string;
  theme: "WebLight" | "WebDark" | "TeamsLight" | "TeamsDark" | "TeamsHighContrast";

}

// This defines your component's Story
export default {
  title: "FluentUI/Slider",

  argTypes: {
    input: {
      control: "number",
      name: 'Input',
      table: {
        category: 'Parameters',
      },
    },
    min: {
      control: "number",
      name: 'Min Value',
      table: {
        category: 'Parameters',
      },
    },
    max: {
      control: "number",
      name: 'Max value',
      table: {
        category: 'Parameters',
      },
    },
    step: {
      control: "number",
      name: 'Step',
      table: {
        category: 'Parameters',
      },
    },
    size: {
      control: "select",
      name: "Size",
      description:
        "",
      options: ["small", "medium"],
      table: {
        category: "Parameters",
      },
    },
    prefix: {
      control: "text",
      name: 'Prefix',
      table: {
        category: 'Parameters',
      },
    },
    vertical: {
      control: "select",
      name: "Vertical",
      description:
        "",
      options: ["true", "false"],
      table: {
        category: "Parameters",
      },
    },
    showMinMax: {
      control: "select",
      name: "Show Min-Max",
      description:
        "",
      options: ["true", "false"],
      table: {
        category: "Parameters",
      },
    },
    showValue: {
      control: "select",
      name: "Show Value",
      description:
        "",
      options: ["true", "false"],
      table: {
        category: "Parameters",
      },
    },
    theme: {
      control: "select",
      name: "Theme",
      description:
        "",
      options: ["WebLight", "WebDark", "TeamsLight", "TeamsDark", "TeamsHighContrast"],
      table: {
        category: "Parameters",
      }
    },
    suffix: {
      control: "text",
      name: 'Sufix',
      table: {
        category: 'Parameters',
      },
    },
    showTooltip: {
      control: "select",
      name: "Show Tooltip",
      description:
        "",
      options: ["true", "false"],
      table: {
        category: "Parameters",
      },
    },
    isDisabled: {
      control: 'boolean',
      name: 'Disabled',
      table: {
        category: 'Mode',
      },
    },
    isVisible: {
      control: 'boolean',
      name: 'Visible',
      table: {
        category: 'Mode',
      },
    },
  },

  // Note: you can define the default arguments of all the stories related to this component here
  args: {
    isDisabled: false,
    isVisible: true,
    input: 0,
    min: 0,
    max: 100,
    step: 0,
    size: "medium",
    vertical: "false",
    theme: "WebLight",
    showMinMax: "true",
    showTooltip: "true",
    showValue: "true",
    prefix: '',
    suffix: '🌟',

  },
  decorators: [
    // Note: You can control the div assigned to your PCF component here.
    // Also, you can make this div resizable if you want to test trackContainerResize
    (Story) => {
      var container = document.createElement('div');
      container.style.margin = '2em';
      container.style.padding = '1em';
      container.style.maxWidth = '350px';
      container.style.border = 'dotted 1px';

      var storyResult = Story();
      if (typeof storyResult == 'string') {
        container.innerHTML = storyResult;
      } else {
        container.appendChild(storyResult);
      }
      return container;
    },
  ],
} as Meta<StoryArgs>;

// This render generator is used to control how the component is rendered for each story.
// With the help of ComponentFrameworkGenerator you can run your component with a fake version
// of the ComponentFramework API
const renderGenerator = () => {
  let container: HTMLDivElement | null;
  let mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs>;

  return function () {
    const [args, updateArgs] = useArgs<StoryArgs>();
    // Fires on unload story
    useEffect(
      () => () => {
        container = null;
        mockGenerator.control.destroy();
      },
      []
    );
    if (!container) {
      container = document.createElement('div');
      mockGenerator = new ComponentFrameworkMockGenerator(
        Component,
        {
          input: DecimalNumberPropertyMock,
          min: WholeNumberPropertyMock,
          max: WholeNumberPropertyMock,
          step: WholeNumberPropertyMock,
          size: EnumPropertyMock,
          vertical: EnumPropertyMock,
          showValue: EnumPropertyMock,
          showTooltip: EnumPropertyMock,
          showMinMax: EnumPropertyMock,
          prefix: StringPropertyMock,
          suffix: StringPropertyMock,
          theme: EnumPropertyMock,
        },
        container, {
        input: "number"
      }
      );

      mockGenerator.context.mode.isControlDisabled = args.isDisabled;
      mockGenerator.context.mode.isVisible = args.isVisible;
      mockGenerator.context._SetCanvasItems({
        input: args.input,
        max: args.max,
        min: args.min,
        prefix: args.prefix,
        showMinMax: args.showMinMax,
        showTooltip: args.showTooltip,
        showValue: args.showValue,
        size: args.size,
        step: args.step,
        suffix: args.suffix,
        theme: args.theme,
        vertical: args.vertical,
      });

      mockGenerator.onOutputChanged.callsFake(({ input }) => {
        // updateArgs({
        //   input
        // });
      });

      mockGenerator.ExecuteInit();
    }

    if (mockGenerator) {
      mockGenerator.context.mode.isVisible = args.isVisible;
      mockGenerator.context.mode.isControlDisabled = args.isDisabled;
      mockGenerator.context._SetCanvasItems({
        input: args.input,
        max: args.max,
        min: args.min,
        prefix: args.prefix,
        showMinMax: args.showMinMax,
        showTooltip: args.showTooltip,
        showValue: args.showValue,
        size: args.size,
        step: args.step,
        suffix: args.suffix,
        theme: args.theme,
        vertical: args.vertical,
      });
      mockGenerator.ExecuteUpdateView();
    }

    return container;
  };
};

// This is a particular configuration of you component. You can export different StoryObj objects
// to show different states of your component
export const Horizontal = {
  render: renderGenerator(),
  parameters: { controls: { expanded: true } },
} as StoryObj<StoryArgs>;