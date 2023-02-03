export type ComponentUsability<States extends string> =
  | `Interactive${States}`
  | 'NonInteractive';

  export type ComponentUsabilityNoCap<States extends string> =
  | `interactive${States}`
  | 'nonInteractive';

