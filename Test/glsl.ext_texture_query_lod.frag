#version 310 es
#extension GL_EXT_texture_query_lod : enable

precision highp float;
precision highp sampler2D;
precision highp isampler2D;
precision highp usampler2D;
precision highp sampler3D;
precision highp isampler3D;
precision highp usampler3D;
precision highp samplerCube;
precision highp isamplerCube;
precision highp usamplerCube;
precision highp sampler2DShadow;
precision highp samplerCubeShadow;
precision highp sampler2DArray;
precision highp isampler2DArray;
precision highp usampler2DArray;
precision highp sampler2DArrayShadow;

uniform sampler2D            s2;
uniform isampler2D           is2;
uniform usampler2D           us2;
uniform sampler3D            s3;
uniform isampler3D           is3;
uniform usampler3D           us3;
uniform samplerCube          sc;
uniform isamplerCube         isc;
uniform usamplerCube         usc;
uniform sampler2DShadow      s2sh;
uniform samplerCubeShadow    scsh;
uniform sampler2DArray       s2a;
uniform isampler2DArray      is2a;
uniform usampler2DArray      us2a;
uniform sampler2DArrayShadow s2ash;

layout(location = 0) out vec2 lod;

void main()
{
    lod  = textureQueryLod(s2,   vec2(0.5));
    lod += textureQueryLod(is2,  vec2(0.5));
    lod += textureQueryLod(us2,  vec2(0.5));
    lod += textureQueryLod(s3,   vec3(0.5));
    lod += textureQueryLod(is3,  vec3(0.5));
    lod += textureQueryLod(us3,  vec3(0.5));
    lod += textureQueryLod(sc,   vec3(0.5));
    lod += textureQueryLod(isc,  vec3(0.5));
    lod += textureQueryLod(usc,  vec3(0.5));
    lod += textureQueryLod(s2sh, vec3(0.5));
    lod += textureQueryLod(scsh, vec4(0.5));
    lod += textureQueryLod(s2a,  vec2(0.5));
    lod += textureQueryLod(is2a, vec2(0.5));
    lod += textureQueryLod(us2a, vec2(0.5));
    lod += textureQueryLod(s2ash, vec3(0.5));

    // uppercase-LOD spelling provided by the same extension
    lod += textureQueryLOD(s2,    vec2(0.5));
    lod += textureQueryLOD(sc,    vec3(0.5));
    lod += textureQueryLOD(s2ash, vec3(0.5));
}
