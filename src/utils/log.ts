const libraryName = '[next-runtime-env]';

const prefixes = {
  warn: `- ${libraryName}`,
  event: `- ${libraryName}`,
  ready: `- ${libraryName}`,
};

export function warn(message: string) {
  // eslint-disable-next-line no-console
  console.warn(`${prefixes.warn} ${message}`);
}

export function event(message: string) {
  // eslint-disable-next-line no-console
  console.info(`${prefixes.event} ${message}`);
}

export function ready(message: string) {
  // eslint-disable-next-line no-console
  console.info(`${prefixes.ready} ${message}`);
}
