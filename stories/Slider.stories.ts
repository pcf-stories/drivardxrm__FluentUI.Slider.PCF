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
      description: "Input column of the slider (Whole.None, Currency, FP, Decimal)",
      table: {
        category: 'Parameters',
      },
    },
    min: {
      control: "number",
      name: 'Min Value',
      description: "Minimum Value of the slider",
      table: {
        category: 'Parameters',
      },
    },
    max: {
      control: "number",
      description: "Maximum Value of the slider",
      name: 'Max value',
      table: {
        category: 'Parameters',
      },
    },
    step: {
      control: "number",
      name: 'Step',
      description: "Incremental step of the slider",
      table: {
        category: 'Parameters',
      },
    },
    size: {
      control: "select",
      name: "Size",
      description:
        "Size of the slider. (small, medium)",
      options: ["small", "medium"],
      table: {
        type: {
          summary: `small | medium`,
        },
        category: "Parameters",
      },
    },
    prefix: {
      control: "text",
      name: 'Prefix',
      description: "(Optional) Display prefix. Ex $ => $0",
      table: {
        category: 'Parameters',
      },
    },
    vertical: {
      control: "select",
      name: "Vertical",
      description:
        "Vertical Direction",
      options: ["true", "false"],
      table: {
        type: {
          summary: `True | False`,
        },
        category: "Parameters",
      },
    },
    showMinMax: {
      control: "select",
      name: "Show Min-Max",
      description:
        "Show min and max values",
      options: ["true", "false"],
      table: {
        type: {
          summary: `True | False`,
        },
        category: "Parameters",
      },
    },
    showValue: {
      control: "select",
      name: "Show Value",
      description: "Show selected value",
      options: ["true", "false"],
      table: {
        type: {
          summary: `True | False`,
        },
        category: "Parameters",
      },
    },
    theme: {
      control: "select",
      name: "Theme",
      description:
        "Theme",
      options: ["WebLight", "WebDark", "TeamsLight", "TeamsDark", "TeamsHighContrast"],
      table: {
        type: {
          summary: `WebLight | WebDark | TeamsLight | TeamsDark | TeamsHighContrast`,
        },
        category: "Parameters",
      }
    },
    suffix: {
      control: "text",
      name: 'Sufix',
      description: "(Optional) Display suffix. Ex $ => 0$",
      table: {
        category: 'Parameters',
      },
    },
    showTooltip: {
      control: "select",
      name: "Show Tooltip",
      description: "Show tooltip with selected value when hovering over the slider",
      options: ["true", "false"],
      table: {
        type: {
          summary: `True | False`,
        },
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
  let debounce: NodeJS.Timeout | null ;

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
       if(debounce){
        clearTimeout(debounce);
       }
       
       debounce = setTimeout(()=> updateArgs({
          input
        }), 600);
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

export const Vertical = {
  render: renderGenerator(),
  args: {
    vertical: "true",
  },
  parameters: { controls: { expanded: false } },
} as StoryObj<StoryArgs>;
export const WithStep = {
  render: renderGenerator(),
  args: {
    step: 10
  },
  parameters: { controls: { expanded: false } },
} as StoryObj<StoryArgs>;
export const Small = {
  render: renderGenerator(),
  args: {
    size: 'small'
  },
  parameters: { controls: { expanded: false } },
} as StoryObj<StoryArgs>;
export const Simple = {
  render: renderGenerator(),
  args: {
    showMinMax: 'false',
    showTooltip: "false",
    showValue: 'false'
  },
  parameters: { controls: { expanded: false } },
} as StoryObj<StoryArgs>;
export const Disabled = {
  render: renderGenerator(),
  args: {
    isDisabled: true
  },
  parameters: { controls: { expanded: false } },
} as StoryObj<StoryArgs>;
export const WebLight = {
  render: renderGenerator(),
  args: {
    theme: "WebLight"
  },
  parameters: { controls: { expanded: false } },
} as StoryObj<StoryArgs>;

export const WebDark = {
  render: renderGenerator(),
  args: {
    theme: "WebDark"
  },
  parameters: { controls: { expanded: false } },
} as StoryObj<StoryArgs>;
export const TeamsLight = {
  render: renderGenerator(),
  args: {
    theme: "TeamsLight"
  },
  parameters: { controls: { expanded: false } },
} as StoryObj<StoryArgs>;
export const TeamsDark = {
  render: renderGenerator(),
  args: {
    theme: "TeamsDark"
  },
  parameters: { controls: { expanded: false } },
} as StoryObj<StoryArgs>;
export const TeamsHighContrast = {
  render: renderGenerator(),
  args: {
    theme: "TeamsHighContrast"
  },
  parameters: { controls: { expanded: false } },
} as StoryObj<StoryArgs>;