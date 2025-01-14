import { Map, Raster, Line, RegionPicker } from '@carbonplan/maps'
import { useColormap } from '@carbonplan/colormaps'

const Index = () => {
  const colormap = useColormap('warm')

  return (
    <div style={{ position: 'absolute', top: 0, bottom: 0, width: '100%' }}>
      <Map zoom={2} center={[0, 0]} debug={false}>
        <Line
          color={'white'}
          source={'https://storage.googleapis.com/carbonplan-share/maps-demo/land'}
          variable={'land'}
        />
        <Raster
          colormap={colormap}
          clim={[0, 1]}
          display={true}
          opacity={1}
          mode={'texture'}
          source={'http://localhost:8000/gpmimerg.zarr/'}
          variable={'precipitation'}
        />
      </Map>
    </div>
  )
}

export default Index
