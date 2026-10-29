export interface CertificateData {
  certificateId: string;
  status: "VALID" | "REVOKED" | "EXPIRED" | "NOT_FOUND";
  issuedAt: string;
  certificateHash: string;
  verificationCode?: string;
  sanitizationMethod?: string;
  wipeMethod?: string;
  verificationMethod?: string;
  verificationResult?: string;
  qrData?: string;
  asset?: {
    id?: string;
    assetId: string;
    deviceType?: string;
    manufacturer?: string;
    model?: string;
    serialNumber?: string;
    storageType?: string;
    storageCapacity?: number | string;
    sanitizationStatus?: string;
  } | null;
}

export interface VerificationApiResponse {
  success: boolean;
  status?: string;
  message?: string;
  certificateId?: string;
  issuedAt?: string;
  certificateHash?: string;
  verificationCode?: string;
  sanitizationMethod?: string;
  verificationMethod?: string;
  verificationResult?: string;
  qrData?: string;
  asset?: {
    id?: string;
    assetTag?: string;
    assetId?: string;
    deviceType?: string;
    make?: string;
    manufacturer?: string;
    model?: string;
    serialNumber?: string;
    storageType?: string;
    storageCapacityGb?: number;
    storageCapacity?: number;
    sanitizationStatus?: string;
  };
}

export interface WorkflowStage {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  standardRef: string;
  details: string[];
}

export interface DeviceProfile {
  id: string;
  name: string;
  category: string;
  driveType: "NVMe SSD" | "SATA SSD" | "Magnetic HDD" | "Mobile UFS/eMMC";
  capacity: string;
  encryption: "Hardware SED (AES-256)" | "Software BitLocker" | "None / Legacy" | "FileVault";
  wearLevel: string;
  recommendedMethod: string;
  standardRef: string;
  confidence: number;
  reasoning: string;
  passesRequired: number;
}
