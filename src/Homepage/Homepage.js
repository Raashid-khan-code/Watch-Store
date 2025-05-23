import Banner from './Banner';
import WatchBrands from './WatchBrands';
import CollectionSection from './CollectionSection';
import WatchGrid from './Watchgrid';
import GenderCollection from './GenderCollection';
import WhyUs from './WhyUs';
import WhyWear from './WhyWearWatches';

function Homepage(){
  return(
    <>
      <Banner></Banner>
      <WatchBrands></WatchBrands>
      <CollectionSection></CollectionSection>
      <WatchGrid></WatchGrid>
      <GenderCollection></GenderCollection>
      <WhyUs></WhyUs>
      <WhyWear></WhyWear>
    </>
  );

}

export default Homepage;