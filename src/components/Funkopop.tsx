/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/funkopop/funkopop.gltf -t -r public 
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Funko_Cru: THREE.Mesh
    Funko_Cru001: THREE.Mesh
    Funko_Cru002: THREE.Mesh
    Funko_Cru003: THREE.Mesh
    Funko_Cru004_1: THREE.Mesh
    Funko_Cru004_2: THREE.Mesh
    Funko_Cru004_3: THREE.Mesh
    Funko_Cru004_4: THREE.Mesh
    Funko_Cru004_5: THREE.Mesh
    Funko_Cru005: THREE.Mesh
    Cylinder_1: THREE.Mesh
    Cylinder_2: THREE.Mesh
    Funko_Cru010: THREE.Mesh
    NurbsPath007: THREE.Mesh
    NurbsPath001: THREE.Mesh
    NurbsPath002: THREE.Mesh
    NurbsPath003: THREE.Mesh
    NurbsPath004: THREE.Mesh
    NurbsPath006: THREE.Mesh
    NurbsPath008: THREE.Mesh
    NurbsPath018: THREE.Mesh
    NurbsPath019: THREE.Mesh
    NurbsPath021: THREE.Mesh
    NurbsPath022: THREE.Mesh
    NurbsPath024: THREE.Mesh
    NurbsPath025: THREE.Mesh
    NurbsPath027: THREE.Mesh
    NurbsPath028: THREE.Mesh
    NurbsPath030: THREE.Mesh
    NurbsPath031: THREE.Mesh
    Cube: THREE.Mesh
    Funko_Cru023: THREE.Mesh
    Funko_Cru023_1: THREE.Mesh
  }
  materials: {
    SKIN: THREE.MeshStandardMaterial
    BLACK: THREE.MeshStandardMaterial
    SHIRT: THREE.MeshStandardMaterial
    PANTS: THREE.MeshStandardMaterial
    Shoes: THREE.MeshStandardMaterial
    shirt2: THREE.MeshStandardMaterial
    beard: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function Funkopop(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/funkopop/funkopop.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Funko_Cru.geometry} material={materials.SKIN} position={[-0.766, 1.921, 0.032]} rotation={[Math.PI / 2, 0, 0]} scale={0.049} />
      <mesh geometry={nodes.Funko_Cru001.geometry} material={materials.SKIN} position={[0.766, 1.921, 0.032]} rotation={[Math.PI / 2, 0, 0]} scale={0.049} />
      <mesh geometry={nodes.Funko_Cru002.geometry} material={materials.BLACK} position={[-0.488, 1.937, 0.808]} rotation={[Math.PI / 2, 0, 0]} scale={0.049} />
      <mesh geometry={nodes.Funko_Cru003.geometry} material={materials.BLACK} position={[0.488, 1.937, 0.808]} rotation={[Math.PI / 2, 0, 0]} scale={0.049} />
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.049}>
        <mesh geometry={nodes.Funko_Cru004_1.geometry} material={materials.SHIRT} />
        <mesh geometry={nodes.Funko_Cru004_2.geometry} material={materials.PANTS} />
        <mesh geometry={nodes.Funko_Cru004_3.geometry} material={materials.SKIN} />
        <mesh geometry={nodes.Funko_Cru004_4.geometry} material={materials.Shoes} />
        <mesh geometry={nodes.Funko_Cru004_5.geometry} material={materials.shirt2} />
      </group>
      <mesh geometry={nodes.Funko_Cru005.geometry} material={materials.SKIN} position={[0, 1.827, 0.82]} rotation={[Math.PI / 2, 0, 0]} scale={0.049} />
      <group position={[0.572, 0.885, 0.05]} rotation={[0.017, -0.337, -1.52]} scale={[0.032, 0.007, 0.032]}>
        <mesh geometry={nodes.Cylinder_1.geometry} material={materials.PANTS} />
        <mesh geometry={nodes.Cylinder_2.geometry} material={materials.BLACK} />
      </group>
      <mesh geometry={nodes.Funko_Cru010.geometry} material={materials.BLACK} position={[-0.414, 1.841, 0.001]} rotation={[Math.PI / 2, 0, 0]} scale={0.049} />
      <mesh geometry={nodes.NurbsPath007.geometry} material={materials.BLACK} position={[0.894, 2.741, 0.526]} rotation={[-Math.PI / 2, -1.186, -Math.PI / 2]} scale={0.523} />
      <mesh geometry={nodes.NurbsPath001.geometry} material={materials.BLACK} position={[0.894, 2.741, 0.526]} rotation={[-Math.PI / 2, -1.186, -Math.PI / 2]} scale={0.523} />
      <mesh geometry={nodes.NurbsPath002.geometry} material={materials.BLACK} position={[-0.026, 2.64, 0.234]} rotation={[-Math.PI / 2, -1.186, -Math.PI / 2]} scale={0.523} />
      <mesh geometry={nodes.NurbsPath003.geometry} material={materials.BLACK} position={[0.894, 2.741, 0.526]} rotation={[-Math.PI / 2, -1.186, -Math.PI / 2]} scale={0.523} />
      <mesh geometry={nodes.NurbsPath004.geometry} material={materials.BLACK} position={[0.894, 2.741, 0.526]} rotation={[-Math.PI / 2, -1.186, -Math.PI / 2]} scale={0.523} />
      <mesh geometry={nodes.NurbsPath006.geometry} material={materials.BLACK} position={[0.894, 2.741, 0.526]} rotation={[-Math.PI / 2, -1.186, -Math.PI / 2]} scale={0.523} />
      <mesh geometry={nodes.NurbsPath008.geometry} material={materials.BLACK} position={[0.894, 2.741, 0.526]} rotation={[-Math.PI / 2, -1.186, -Math.PI / 2]} scale={0.523} />
      <mesh geometry={nodes.NurbsPath018.geometry} material={materials.BLACK} position={[0.894, 2.741, 0.526]} rotation={[-Math.PI / 2, -1.186, -Math.PI / 2]} scale={0.523} />
      <mesh geometry={nodes.NurbsPath019.geometry} material={materials.BLACK} position={[0.894, 2.741, 0.526]} rotation={[-Math.PI / 2, -1.186, -Math.PI / 2]} scale={0.523} />
      <mesh geometry={nodes.NurbsPath021.geometry} material={materials.BLACK} position={[0.894, 2.741, 0.526]} rotation={[-Math.PI / 2, -1.186, -Math.PI / 2]} scale={0.523} />
      <mesh geometry={nodes.NurbsPath022.geometry} material={materials.BLACK} position={[0.894, 2.741, 0.526]} rotation={[-Math.PI / 2, -1.186, -Math.PI / 2]} scale={0.523} />
      <mesh geometry={nodes.NurbsPath024.geometry} material={materials.BLACK} position={[0.894, 2.741, 0.526]} rotation={[-Math.PI / 2, -1.186, -Math.PI / 2]} scale={0.523} />
      <mesh geometry={nodes.NurbsPath025.geometry} material={materials.BLACK} position={[0.894, 2.741, 0.526]} rotation={[-Math.PI / 2, -1.186, -Math.PI / 2]} scale={0.523} />
      <mesh geometry={nodes.NurbsPath027.geometry} material={materials.BLACK} position={[0.894, 2.741, 0.526]} rotation={[-Math.PI / 2, -1.186, -Math.PI / 2]} scale={0.523} />
      <mesh geometry={nodes.NurbsPath028.geometry} material={materials.BLACK} position={[0.894, 2.741, 0.526]} rotation={[-Math.PI / 2, -1.186, -Math.PI / 2]} scale={0.523} />
      <mesh geometry={nodes.NurbsPath030.geometry} material={materials.BLACK} position={[0.894, 2.741, 0.526]} rotation={[-Math.PI / 2, -1.186, -Math.PI / 2]} scale={0.523} />
      <mesh geometry={nodes.NurbsPath031.geometry} material={materials.BLACK} position={[0.894, 2.741, 0.526]} rotation={[-Math.PI / 2, -1.186, -Math.PI / 2]} scale={0.523} />
      <mesh geometry={nodes.Cube.geometry} material={materials.BLACK} position={[0.004, 2.18, 0.81]} rotation={[0, 0, 0.018]} scale={[0.044, 0.049, 0.044]} />
      <group position={[0, 1.8, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.049}>
        <mesh geometry={nodes.Funko_Cru023.geometry} material={materials.SKIN} />
        <mesh geometry={nodes.Funko_Cru023_1.geometry} material={materials.beard} />
      </group>
    </group>
  )
}

useGLTF.preload('/funkopop/funkopop.gltf')