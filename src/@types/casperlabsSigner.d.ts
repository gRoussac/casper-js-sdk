interface CasperLabsHelper {
  /**
   * Returns Signer version
   */
  getVersion: () => Promise<string>;

  /**
   * Returns connection status from Signer
   */
  isConnected: () => Promise<boolean>;
  
  /**
   * Attempt connection to Signer
   */
  requestConnection: () => void;
  
  /**
   * Send Deploy in JSON format message to Signer plugin to sign.
   *
   * @param deploy deploy in JSON format
   * @param sourcePublicKey base64 encoded public key used to sign the deploy
   * @param targetPublicKey base64 encoded public key used to sign the deploy
   */
  sign: (deploy: JSON, sourcePublicKey: string, targetPublicKey: string) => Promise<JSON>;
  
  /*
   * Returns base64 encoded public key of user current selected account.
   */
  getSelectedPublicKeyBase64: () => Promise<string>;

  /**
   * Retrieve the active public key.
   * @returns {string} Hex-encoded public key with algorithm prefix.
   */
  getActivePublicKey: () => Promise<string>;

  /*
   * Forces Signer to disconnect from the currently open site.
   */
  disconnectFromSite: () => void;
}

interface SignerTestingHelper {
  /*
   * Force connection to Signer (for testing)
   */
  forceConnection: () => void;
  /**
   * Force disconnect from Signer
   */
  forceDisconnect: () => void;
  /**
   * Check if there is an existing vault
   */
  hasCreatedVault: () => Promise<boolean>;
  /**
   * Reset existing vault (for testing) prevents complications
   * and unlocks in preparation for creating an account
   */
  resetExistingVault: () => Promise<void>;
  /**
   * Create a vault (for testing)
   */
  createNewVault: (password: string) => Promise<void>;
  /**
   * Create an account (for testing)
   */
  createTestAccount: (name: string, privateKey: string) => Promise<void>;
  /**
   * Return message ID so we can sign deploy programatically
   */
  getToSignMessageID: () => Promise<number | null>;
  /**
   * Sign deploy with given id (provided by above method)
   */
  signTestDeploy: (msgId: number) => Promise<void>;
}

interface Window {
  casperlabsHelper?: CasperLabsHelper;
  signerTestingHelper?: SignerTestingHelper;
}
