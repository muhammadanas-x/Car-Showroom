/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 scene.gltf 
Author: ChristyHsu (https://sketchfab.com/ida61xq)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/scifi-tron-studio-baked-88c7b7b5adc54b2eab451ebaf55ce941
Title: Scifi Tron Studio | Baked
*/

import React, { useEffect, useMemo, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { ShaderMaterial } from 'three';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three'
import mapVertex from '../MapShader/mapVertex';
import mapFragment from '../MapShader/mapFragment';
import { RigidBody } from '@react-three/rapier';

export function Model(props) {
  const { nodes, materials } = useGLTF('FeaturedCarsShowroom/scene.gltf')



  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[0, 122.556, -99.564]} rotation={[-Math.PI / 2, 0, 0]} scale={[237.378, 243.106, 10.544]}>
          <RigidBody type='fixed' colliders={"trimesh"}>
            <mesh geometry={nodes.stage_stage5_0.geometry} material={materials.stage5} />
            <mesh geometry={nodes.stage_stage2_0.geometry} material={materials.stage2} />
            <mesh geometry={nodes.stage_stage3_0.geometry} material={materials.stage3} />
            <mesh geometry={nodes.stage_stage1_0.geometry} material={materials.stage1} />
            <mesh geometry={nodes.stage_stage4_0.geometry} material={materials.stage4} />
          </RigidBody>
          
        </group>
        {/* <group position={[0, 600.51, -301.167]} rotation={[-Math.PI / 2, 0, 0]} scale={[976.004, 3.161, 443.101]}>
          <mesh geometry={nodes.frame_frame1_0.geometry} material={materials.frame1} />
          <mesh geometry={nodes.frame_frame2_0.geometry} material={materials.frame2} />
        </group> */}
        <group position={[-1435.453, 946.575, -215.334]} rotation={[-Math.PI / 2, 0, 0]} scale={[22.008, 574.789, 100]}>
          <mesh geometry={nodes.dec_dec1_0.geometry} material={materials.dec1} />
          <mesh geometry={nodes.dec_dec2_0.geometry} material={materials.dec2} />
        </group>
        <group position={[-1823.353, 355.15, -855.587]} rotation={[-1.231, 0.4, 0.834]} scale={[418.331, 113.488, 325.782]}>
          <mesh geometry={nodes.Cube_dec_cube_dec1_0.geometry} material={materials.cube_dec1} />
          <mesh geometry={nodes.Cube_dec_cude_dec2_0.geometry} material={materials.cude_dec2} />
        </group>
        <group position={[-1773.136, 316.913, 458.878]} rotation={[Math.PI, 0.193, 0.717]} scale={[359.582, 97.55, 280.03]}>
          <mesh geometry={nodes.Cube_light_Cube_light2_0.geometry} material={materials.Cube_light2} />
          <mesh geometry={nodes.Cube_light_Cube_light3_0.geometry} material={materials.Cube_light3} />
          <mesh geometry={nodes.Cube_light_Cube_light4_0.geometry} material={materials.Cube_light4} />
          <mesh geometry={nodes.Cube_light_Cube_light1_0.geometry} material={materials.Cube_light1} />
        </group>
        <RigidBody colliders={"trimesh"} type='fixed'>
        
          <mesh geometry={nodes.floor_floor_0.geometry} material={materials.floor} position={[45.134, 340.95, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[4456.016, 4456.016, 341.147]} />

        </RigidBody>
        <mesh geometry={nodes.house_house_0.geometry} material={materials.house} position={[45.134, 340.95, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[4456.016, 4456.016, 341.147]} />
        <mesh geometry={nodes.lighting_lighting_0.geometry} material={materials.lighting} position={[0, 52.159, 115.188]} rotation={[-Math.PI / 2, 0, 0]} scale={[726.455, 691.253, 22.138]} />
        {/* <mesh geometry={nodes.screen_screen001_0.geometry} material={materials['screen.001']} rotation={[-Math.PI / 2, 0, 0]} scale={100} /> */}
        <mesh geometry={nodes.roof_roof2_0.geometry} material={materials.roof2} position={[0, 1336.289, -67.294]} rotation={[-Math.PI / 2, 0, 0]} scale={[1205.933, 1148.85, 58.488]} />
      </group>
    </group>
  )
}

useGLTF.preload('FeaturedCarsShowroom/scene.gltf')
