const posts = [
  {
    date: "June 2026",
    title: "Why LLMs for Time Series?",
    summary: "LLMs can help with time series forecasting, but not in every setting.",
    body: "In Rethinking the Role of LLMs in Time Series Forecasting, Qiu et al. (2026) look at a question that has become fairly debated: do LLMs actually help with forecasting, or are they just adding extra complexity? Their results suggest that the answer depends a lot on the setup. LLM-based models seem more useful when they are trained on diverse time series data and tested in settings that go beyond a single narrow dataset. The paper also shows that both pretrained knowledge and the model architecture matter, especially when the data distribution shifts or the temporal patterns become more complex. At the same time, simply using a larger LLM is not enough. The way the time series is aligned with the language model, the diversity of the data, and the structure of the task all matter.",
    tags: ["time series", "LLMs", "transfer"]
  }
];
