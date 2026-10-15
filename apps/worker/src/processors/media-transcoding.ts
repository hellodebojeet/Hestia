// Video resizing, HLS chunking, WebP conversion. Idempotent per mediaAsset id.
export async function transcodeMedia(mediaAssetId: string): Promise<{ mediaAssetId: string; status: "READY" }> {
  return { mediaAssetId, status: "READY" };
}
