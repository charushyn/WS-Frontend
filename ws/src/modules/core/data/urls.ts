let clientUrl: string = "";

if (typeof window !== "undefined") {
  clientUrl = window.origin;
}

export { clientUrl };
