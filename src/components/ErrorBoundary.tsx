import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('PeeFee Interiors render error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#FAF8F5] text-[#141312] flex items-center justify-center p-6">
          <div className="max-w-md w-full p-8 bg-[#F4EFEA] border border-[#141312]/10 space-y-4 text-center">
            <div className="w-12 h-12 mx-auto rounded-sm bg-[#141312] flex items-center justify-center p-2">
              <img
                src="/assets/aistudio/PeeFee_logo-1_a9734fc5.svg"
                alt="PeeFee Logo"
                className="w-full h-full object-contain invert brightness-200"
              />
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#141312]">
              PeeFee Interiors
            </h2>
            <p className="text-sm text-[#5C554E]">
              We are refreshing the application. Please reload or contact our studio directly on WhatsApp.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => window.location.reload()}
                className="w-full py-2.5 px-4 bg-[#141312] text-white text-xs font-semibold uppercase tracking-wider"
              >
                Reload Page
              </button>
              <a
                href="https://wa.me/2348165762086"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider text-center"
              >
                Chat on WhatsApp (+234 816 576 2086)
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
