export class NotFoundError extends Error {
  constructor(
    readonly resource: string,
    readonly id: string,
  ) {
    super(`${resource} with id "${id}" was not found`);
    this.name = "NotFoundError";
  }
}

export class SimulatedDataError extends Error {
  constructor() {
    super("Simulated data-source failure");
    this.name = "SimulatedDataError";
  }
}

export class DataSourceNotConnectedError extends Error {
  constructor(method: string) {
    super(
      `${method} is not available yet: the API data source is not connected`,
    );
    this.name = "DataSourceNotConnectedError";
  }
}
