import Checkbox from './input/Checkbox';
import ImageInput from './input/Image';
import Slider from './input/Slider';
import { OptionsContext } from '../index.page';
import { FC, ChangeEventHandler, useContext } from 'react';

const AppInput: FC = (prop) => {
  const {
    segment: [width, height], setSegment,
    pos: [lat, lon], setPos,
    dir, setDir,
    kappa, setKappa,
    vis: [visman, vispro], setVis,
    textureURL, setTextureURL,
  }  = useContext(OptionsContext)!;
  const setWidth = (width: number) => setSegment([width, height]);
  const setHeight = (height: number) => setSegment([width, height]);
  const setLat = (lat: number) => setPos([lat, lon]);
  const setLon = (lon: number) => setPos([lat, lon]);
  const setVisman = (visman: boolean) => setVis([visman, vispro]);
  const setVispro = (vispro: boolean) => setVis([visman, vispro]);
  const setVisAll = (vis: boolean) => setVis([vis, vis]);
  return (
    <form>
      <label>Segments</label>
      <br />
      <Slider name={'height'} min={2} max={32} step={1} value={height} onChange={(event) => setHeight(parseInt(event.target.value))}></Slider>
      <br />
      <Slider name={'width'} min={3} max={24} step={1} value={width} onChange={(event) => setWidth(parseInt(event.target.value))}></Slider>
      <br />
      <label>Position</label>
      <br />
      <Slider name={'latitude'} min={-0.25} max={+0.25} step={0} value={lat} onChange={(event) => setLat(parseFloat(event.target.value))}></Slider>
      <br />
      <Slider name={'lontitude'} min={-0.5} max={+0.5} step={0} value={lon} onChange={(event) => setLon(parseFloat(event.target.value))}></Slider>
      <br />
      <Slider name={'direction'} min={-0.5} max={+0.5} step={0} value={dir} onChange={(event) => setDir(parseFloat(event.target.value))}></Slider>
      <br />
      <label>Curvature</label>
      <br />
      <Slider name={'kappa'} min={-1} max={+1} step={0} value={kappa} onChange={(event) => setKappa(parseFloat(event.target.value))}></Slider>
      <br />
      <label>Visibility</label>
      <br />
      <Checkbox
        name={'Projections'}
        child={[
          { name: 'Manifold', onChange: (event)=>setVisman(event.target.checked), checked: visman },
          { name: 'Projection', onChange: (event)=>setVispro(event.target.checked), checked: vispro },
        ]}
        onChange={(event)=>setVisAll(event.target.checked)}
      ></Checkbox>
      <br />
      <label>Texture selection</label>
      <br />
      <ImageInput name={''} width={400} height={200} onChange={(event) => setTextureURL(URL.createObjectURL(event.target.files![0]!))}></ImageInput>
    </form>
  );
};
export default AppInput;
