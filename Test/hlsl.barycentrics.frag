// Test SV_Barycentrics mapping to BaryCoordKHR (perspective) and
// BaryCoordNoPerspKHR (with the noperspective interpolation modifier).

struct PSIn
{
    float3 bary : SV_Barycentrics;
    noperspective float3 baryNoPersp : SV_Barycentrics;
};

float4 PSMain(PSIn input, float3 baryParam : SV_Barycentrics) : SV_Target0
{
    float3 bary = input.bary + baryParam;
    return float4(bary + input.baryNoPersp, 1.0);
}
