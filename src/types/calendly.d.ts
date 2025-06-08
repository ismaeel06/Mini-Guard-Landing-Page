declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: {
        url: string;
        parentElement?: HTMLElement;
        rootElement?: HTMLElement;
        prefill?: {
          name?: string;
          email?: string;
          customAnswers?: Record<string, string>;
        };
        utm?: {
          utmCampaign?: string;
          utmSource?: string;
          utmMedium?: string;
        };
      }) => void;
    };
  }
}

export {};