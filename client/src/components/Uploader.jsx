import React from 'react';
import {withAuthInfo} from "@propelauth/react";

class Uploader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: '',
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('snakeName', document.getElementById("snake_name").value);

    fetch('http://localhost:3001/upload', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ imageURL: `http://localhost:3001/${body.file}` });
      });
    });
  }

  render() {
    return (
      <form onSubmit={this.handleUploadImage}>
        <div>
          <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
        </div>
        <div>
        <div>
            <datalist id="suggestions">
            <option>Acris blanchardi</option>
<option>Acris crepitans</option>
<option>Acris gryllus</option>
<option>Actinemys marmorata</option>
<option>Agama picticauda</option>
<option>Agkistrodon conanti</option>
<option>Agkistrodon conanti × piscivorus</option>
<option>Agkistrodon contortrix</option>
<option>Agkistrodon laticinctus</option>
<option>Agkistrodon piscivorus</option>
<option>Alligator mississippiensis</option>
<option>Ambystoma annulatum</option>
<option>Ambystoma barbouri</option>
<option>Ambystoma californiense</option>
<option>Ambystoma gracile</option>
<option>Ambystoma jeffersonianum</option>
<option>Ambystoma laterale</option>
<option>Ambystoma macrodactylum</option>
<option>Ambystoma maculatum</option>
<option>Ambystoma mavortium</option>
<option>Ambystoma mexicanum</option>
<option>Ambystoma opacum</option>
<option>Ambystoma talpoideum</option>
<option>Ambystoma texanum</option>
<option>Ambystoma tigrinum</option>
<option>Ambystoma unisexual</option>
<option>Ameiva ameiva</option>
<option>Amphiuma means</option>
<option>Amphiuma tridactylum</option>
<option>Anaxyrus americanus</option>
<option>Anaxyrus boreas</option>
<option>Anaxyrus californicus</option>
<option>Anaxyrus canorus</option>
<option>Anaxyrus cognatus</option>
<option>Anaxyrus debilis</option>
<option>Anaxyrus fowleri</option>
<option>Anaxyrus hemiophrys</option>
<option>Anaxyrus microscaphus</option>
<option>Anaxyrus punctatus</option>
<option>Anaxyrus quercicus</option>
<option>Anaxyrus speciosus</option>
<option>Anaxyrus terrestris</option>
<option>Anaxyrus woodhousii</option>
<option>Aneides aeneus</option>
<option>Aneides ferreus</option>
<option>Aneides flavipunctatus</option>
<option>Aneides klamathensis</option>
<option>Aneides lugubris</option>
<option>Aneides niger</option>
<option>Aneides vagrans</option>
<option>Anniella pulchra</option>
<option>Anniella stebbinsi</option>
<option>Anolis carolinensis</option>
<option>Anolis cristatellus</option>
<option>Anolis distichus</option>
<option>Anolis equestris</option>
<option>Anolis sagrei</option>
<option>Apalone ferox</option>
<option>Apalone mutica</option>
<option>Apalone spinifera</option>
<option>Arizona elegans</option>
<option>Ascaphus montanus</option>
<option>Ascaphus truei</option>
<option>Aspidoscelis exsanguis</option>
<option>Aspidoscelis gularis</option>
<option>Aspidoscelis hyperythrus</option>
<option>Aspidoscelis inornatus</option>
<option>Aspidoscelis marmoratus</option>
<option>Aspidoscelis neomexicanus</option>
<option>Aspidoscelis neotesselatus</option>
<option>Aspidoscelis scalaris</option>
<option>Aspidoscelis sexlineatus</option>
<option>Aspidoscelis sonorae</option>
<option>Aspidoscelis stictogrammus</option>
<option>Aspidoscelis tesselatus</option>
<option>Aspidoscelis tigris</option>
<option>Aspidoscelis uniparens</option>
<option>Aspidoscelis velox</option>
<option>Basiliscus vittatus</option>
<option>Batrachoseps attenuatus</option>
<option>Batrachoseps gavilanensis</option>
<option>Batrachoseps luciae</option>
<option>Batrachoseps major</option>
<option>Batrachoseps nigriventris</option>
<option>Bogertophis subocularis</option>
<option>Callisaurus draconoides</option>
<option>Caretta caretta</option>
<option>Carphophis amoenus</option>
<option>Carphophis vermis</option>
<option>Cemophora coccinea</option>
<option>Centrochelys sulcata</option>
<option>Chamaeleo calyptratus</option>
<option>Charina bottae</option>
<option>Chelonia mydas</option>
<option>Chelonoidis carbonarius</option>
<option>Chelydra serpentina</option>
<option>Chrysemys dorsalis</option>
<option>Chrysemys picta</option>
<option>Clemmys guttata</option>
<option>Coleonyx brevis</option>
<option>Coleonyx variegatus</option>
<option>Coluber constrictor</option>
<option>Contia longicaudae</option>
<option>Contia tenuis</option>
<option>Cophosaurus texanus</option>
<option>Correlophus ciliatus</option>
<option>Crocodylus acutus</option>
<option>Crotalus adamanteus</option>
<option>Crotalus atrox</option>
<option>Crotalus cerastes</option>
<option>Crotalus cerberus</option>
<option>Crotalus horridus</option>
<option>Crotalus lepidus</option>
<option>Crotalus molossus</option>
<option>Crotalus oreganus</option>
<option>Crotalus ornatus</option>
<option>Crotalus pyrrhus</option>
<option>Crotalus ruber</option>
<option>Crotalus scutulatus</option>
<option>Crotalus stephensi</option>
<option>Crotalus tigris</option>
<option>Crotalus viridis</option>
<option>Crotalus willardi</option>
<option>Crotaphytus bicinctores</option>
<option>Crotaphytus collaris</option>
<option>Cryptobranchus alleganiensis</option>
<option>Ctenosaura conspicuosa × macrolopha</option>
<option>Ctenosaura similis</option>
<option>Cyrtopodion scabrum</option>
<option>Deirochelys reticularia</option>
<option>Dendrobates auratus</option>
<option>Dendrobates tinctorius</option>
<option>Desmognathus adatsihi</option>
<option>Desmognathus amphileucus</option>
<option>Desmognathus bairdi</option>
<option>Desmognathus brimleyorum</option>
<option>Desmognathus campi</option>
<option>Desmognathus carolinensis</option>
<option>Desmognathus conanti</option>
<option>Desmognathus fuscus</option>
<option>Desmognathus gvnigeusgwotli</option>
<option>Desmognathus imitator</option>
<option>Desmognathus kanawha</option>
<option>Desmognathus lycos</option>
<option>Desmognathus mavrokoilius</option>
<option>Desmognathus monticola</option>
<option>Desmognathus ochrophaeus</option>
<option>Desmognathus ocoee</option>
<option>Desmognathus orestes</option>
<option>Desmognathus organi</option>
<option>Desmognathus perlapsus</option>
<option>Desmognathus santeetlah</option>
<option>Desmognathus wrighti</option>
<option>Diadophis punctatus</option>
<option>Dicamptodon ensatus</option>
<option>Dicamptodon tenebrosus</option>
<option>Dipsosaurus dorsalis</option>
<option>Drymarchon melanurus</option>
<option>Eleutherodactylus campi</option>
<option>Eleutherodactylus coqui</option>
<option>Eleutherodactylus marnockii</option>
<option>Eleutherodactylus planirostris</option>
<option>Elgaria coerulea</option>
<option>Elgaria kingii</option>
<option>Elgaria multicarinata</option>
<option>Emydoidea blandingii</option>
<option>Ensatina eschscholtzii</option>
<option>Eublepharis macularius</option>
<option>Eurycea bislineata</option>
<option>Eurycea cirrigera</option>
<option>Eurycea guttolineata</option>
<option>Eurycea longicauda</option>
<option>Eurycea lucifuga</option>
<option>Eurycea melanopleura</option>
<option>Eurycea multiplicata</option>
<option>Eurycea paludicola</option>
<option>Eurycea quadridigitata</option>
<option>Eurycea tynerensis</option>
<option>Eurycea wilderae</option>
<option>Farancia abacura</option>
<option>Gambelia sila</option>
<option>Gambelia wislizenii</option>
<option>Gastrophryne carolinensis</option>
<option>Gastrophryne olivacea</option>
<option>Gekko gecko</option>
<option>Gerrhonotus infernalis</option>
<option>Glyptemys insculpta</option>
<option>Gopherus agassizii</option>
<option>Gopherus berlandieri</option>
<option>Gopherus morafkai</option>
<option>Gopherus polyphemus</option>
<option>Graptemys caglei</option>
<option>Graptemys geographica</option>
<option>Graptemys ouachitensis</option>
<option>Graptemys pseudogeographica</option>
<option>Graptemys versa</option>
<option>Gyrinophilus porphyriticus</option>
<option>Heloderma suspectum</option>
<option>Hemidactylium scutatum</option>
<option>Hemidactylus frenatus</option>
<option>Hemidactylus garnotii</option>
<option>Hemidactylus mabouia</option>
<option>Hemidactylus parvimaculatus</option>
<option>Hemidactylus turcicus</option>
<option>Heterodon kennerlyi</option>
<option>Heterodon nasicus</option>
<option>Heterodon platirhinos</option>
<option>Holbrookia elegans</option>
<option>Holbrookia lacerata</option>
<option>Holbrookia maculata</option>
<option>Holbrookia propinqua</option>
<option>Hyla arenicolor</option>
<option>Hyla avivoca</option>
<option>Hyla chrysoscelis</option>
<option>Hyla cinerea</option>
<option>Hyla femoralis</option>
<option>Hyla gratiosa</option>
<option>Hyla squirella</option>
<option>Hyla versicolor</option>
<option>Hyla wrightorum</option>
<option>Hypopachus variolosus</option>
<option>Hypsiglena chlorophaea</option>
<option>Hypsiglena jani</option>
<option>Hypsiglena ochrorhynchus</option>
<option>Iguana iguana</option>
<option>Incilius alvarius</option>
<option>Incilius nebulifer</option>
<option>Indotyphlops braminus</option>
<option>Kinosternon baurii</option>
<option>Kinosternon flavescens</option>
<option>Kinosternon sonoriense</option>
<option>Kinosternon subrubrum</option>
<option>Lampropeltis alterna</option>
<option>Lampropeltis californiae</option>
<option>Lampropeltis calligaster</option>
<option>Lampropeltis elapsoides</option>
<option>Lampropeltis gentilis</option>
<option>Lampropeltis getula</option>
<option>Lampropeltis holbrooki</option>
<option>Lampropeltis knoblochi</option>
<option>Lampropeltis multifasciata</option>
<option>Lampropeltis nigra</option>
<option>Lampropeltis pyromelana</option>
<option>Lampropeltis rhombomaculata</option>
<option>Lampropeltis splendida</option>
<option>Lampropeltis triangulum</option>
<option>Lampropeltis zonata</option>
<option>Lampropholis delicata</option>
<option>Leiocephalus carinatus</option>
<option>Lepidochelys kempii</option>
<option>Lepidodactylus lugubris</option>
<option>Lichanura orcutti</option>
<option>Liodytes alleni</option>
<option>Liodytes pygaea</option>
<option>Liodytes rigida</option>
<option>Lithobates areolatus</option>
<option>Lithobates berlandieri</option>
<option>Lithobates blairi</option>
<option>Lithobates capito</option>
<option>Lithobates catesbeianus</option>
<option>Lithobates chiricahuensis</option>
<option>Lithobates clamitans</option>
<option>Lithobates grylio</option>
<option>Lithobates heckscheri</option>
<option>Lithobates kauffeldi</option>
<option>Lithobates palustris</option>
<option>Lithobates pipiens</option>
<option>Lithobates septentrionalis</option>
<option>Lithobates sphenocephalus</option>
<option>Lithobates sylvaticus</option>
<option>Lithobates virgatipes</option>
<option>Lithobates yavapaiensis</option>
<option>Macrochelys temminckii</option>
<option>Malaclemys terrapin</option>
<option>Masticophis bilineatus</option>
<option>Masticophis flagellum</option>
<option>Masticophis lateralis</option>
<option>Masticophis schotti</option>
<option>Masticophis taeniatus</option>
<option>Micruroides euryxanthus</option>
<option>Micrurus fulvius</option>
<option>Micrurus tener</option>
<option>Necturus maculosus</option>
<option>Nerodia clarkii</option>
<option>Nerodia cyclopion</option>
<option>Nerodia erythrogaster</option>
<option>Nerodia fasciata</option>
<option>Nerodia floridana</option>
<option>Nerodia rhombifer</option>
<option>Nerodia sipedon</option>
<option>Nerodia taxispilota</option>
<option>Notophthalmus viridescens</option>
<option>Opheodrys aestivus</option>
<option>Opheodrys vernalis</option>
<option>Ophisaurus attenuatus</option>
<option>Ophisaurus ventralis</option>
<option>Osteopilus septentrionalis</option>
<option>Pantherophis alleghaniensis</option>
<option>Pantherophis bairdi</option>
<option>Pantherophis emoryi</option>
<option>Pantherophis guttatus</option>
<option>Pantherophis obsoletus</option>
<option>Pantherophis ramspotti</option>
<option>Pantherophis spiloides</option>
<option>Pantherophis vulpinus</option>
<option>Petrosaurus mearnsi</option>
<option>Phelsuma grandis</option>
<option>Phelsuma laticauda</option>
<option>Phrynosoma blainvillii</option>
<option>Phrynosoma cornutum</option>
<option>Phrynosoma douglasii</option>
<option>Phrynosoma hernandesi</option>
<option>Phrynosoma mcallii</option>
<option>Phrynosoma modestum</option>
<option>Phrynosoma platyrhinos</option>
<option>Phrynosoma solare</option>
<option>Phyllorhynchus decurtatus</option>
<option>Pituophis catenifer</option>
<option>Pituophis melanoleucus</option>
<option>Plestiodon anthracinus</option>
<option>Plestiodon egregius</option>
<option>Plestiodon fasciatus</option>
<option>Plestiodon gilberti</option>
<option>Plestiodon inexpectatus</option>
<option>Plestiodon laticeps</option>
<option>Plestiodon multivirgatus</option>
<option>Plestiodon obsoletus</option>
<option>Plestiodon reynoldsi</option>
<option>Plestiodon septentrionalis</option>
<option>Plestiodon skiltonianus</option>
<option>Plestiodon tetragrammus</option>
<option>Plethodon albagula</option>
<option>Plethodon amplus</option>
<option>Plethodon angusticlavius</option>
<option>Plethodon chattahoochee</option>
<option>Plethodon chlorobryonis</option>
<option>Plethodon cinereus</option>
<option>Plethodon cylindraceus</option>
<option>Plethodon dorsalis</option>
<option>Plethodon dunni</option>
<option>Plethodon electromorphus</option>
<option>Plethodon elongatus</option>
<option>Plethodon glutinosus</option>
<option>Plethodon grobmani</option>
<option>Plethodon hoffmani</option>
<option>Plethodon hubrichti</option>
<option>Plethodon jordani</option>
<option>Plethodon metcalfi</option>
<option>Plethodon mississippi</option>
<option>Plethodon montanus</option>
<option>Plethodon ouachitae</option>
<option>Plethodon petraeus</option>
<option>Plethodon richmondi</option>
<option>Plethodon serratus</option>
<option>Plethodon shermani</option>
<option>Plethodon teyahalee</option>
<option>Plethodon vehiculum</option>
<option>Plethodon ventralis</option>
<option>Plethodon websteri</option>
<option>Plethodon wehrlei</option>
<option>Plethodon welleri</option>
<option>Plethodon yonahlossee</option>
<option>Podarcis muralis</option>
<option>Podarcis siculus</option>
<option>Pogona vitticeps</option>
<option>Pseudacris brachyphona</option>
<option>Pseudacris cadaverina</option>
<option>Pseudacris clarkii</option>
<option>Pseudacris crucifer</option>
<option>Pseudacris feriarum</option>
<option>Pseudacris fouquettei</option>
<option>Pseudacris maculata</option>
<option>Pseudacris ocularis</option>
<option>Pseudacris regilla</option>
<option>Pseudacris streckeri</option>
<option>Pseudacris triseriata</option>
<option>Pseudemys concinna</option>
<option>Pseudemys floridana</option>
<option>Pseudemys gorzugi</option>
<option>Pseudemys nelsoni</option>
<option>Pseudemys peninsularis</option>
<option>Pseudemys rubriventris</option>
<option>Pseudemys texana</option>
<option>Pseudotriton ruber</option>
<option>Python bivittatus</option>
<option>Python regius</option>
<option>Rana aurora</option>
<option>Rana boylii</option>
<option>Rana cascadae</option>
<option>Rana draytonii</option>
<option>Rana luteiventris</option>
<option>Rana sierrae</option>
<option>Regina grahamii</option>
<option>Regina septemvittata</option>
<option>Rena dulcis</option>
<option>Rena humilis</option>
<option>Rhadinaea flavilata</option>
<option>Rhinella horribilis</option>
<option>Rhinella marina</option>
<option>Rhineura floridana</option>
<option>Rhinocheilus lecontei</option>
<option>Rhyacotriton cascadae</option>
<option>Rhyacotriton kezeri</option>
<option>Rhyacotriton variegatus</option>
<option>Salvadora deserticola</option>
<option>Salvadora grahamiae</option>
<option>Salvadora hexalepis</option>
<option>Salvadora lineata</option>
<option>Salvator merianae</option>
<option>Sauromalus ater</option>
<option>Scaphiopus couchii</option>
<option>Scaphiopus holbrookii</option>
<option>Scaphiopus hurterii</option>
<option>Sceloporus bimaculosus</option>
<option>Sceloporus clarkii</option>
<option>Sceloporus consobrinus</option>
<option>Sceloporus cowlesi</option>
<option>Sceloporus cyanogenys</option>
<option>Sceloporus graciosus</option>
<option>Sceloporus jarrovii</option>
<option>Sceloporus magister</option>
<option>Sceloporus merriami</option>
<option>Sceloporus occidentalis</option>
<option>Sceloporus olivaceus</option>
<option>Sceloporus orcutti</option>
<option>Sceloporus poinsettii</option>
<option>Sceloporus tristichus</option>
<option>Sceloporus undulatus</option>
<option>Sceloporus uniformis</option>
<option>Sceloporus vandenburgianus</option>
<option>Sceloporus variabilis</option>
<option>Sceloporus virgatus</option>
<option>Sceloporus woodi</option>
<option>Scincella lateralis</option>
<option>Siren lacertina</option>
<option>Siren nettingi</option>
<option>Sistrurus catenatus</option>
<option>Sistrurus miliarius</option>
<option>Sistrurus tergeminus</option>
<option>Sonora annulata</option>
<option>Sonora cincta</option>
<option>Sonora episcopa</option>
<option>Sonora occipitalis</option>
<option>Sonora semiannulata</option>
<option>Spea bombifrons</option>
<option>Spea hammondii</option>
<option>Spea intermontana</option>
<option>Spea multiplicata</option>
<option>Sternotherus carinatus</option>
<option>Sternotherus minor</option>
<option>Sternotherus odoratus</option>
<option>Sternotherus peltifer</option>
<option>Storeria dekayi</option>
<option>Storeria occipitomaculata</option>
<option>Storeria victa</option>
<option>Tantilla coronata</option>
<option>Tantilla gracilis</option>
<option>Tantilla hobartsmithi</option>
<option>Tantilla nigriceps</option>
<option>Tantilla planiceps</option>
<option>Tarentola mauritanica</option>
<option>Taricha granulosa</option>
<option>Taricha rivularis</option>
<option>Taricha sierrae</option>
<option>Taricha torosa</option>
<option>Terrapene carolina</option>
<option>Terrapene ornata</option>
<option>Terrapene triunguis</option>
<option>Testudo horsfieldii</option>
<option>Thamnophis atratus</option>
<option>Thamnophis brachystoma</option>
<option>Thamnophis butleri</option>
<option>Thamnophis couchii</option>
<option>Thamnophis cyrtopsis</option>
<option>Thamnophis elegans</option>
<option>Thamnophis hammondii</option>
<option>Thamnophis marcianus</option>
<option>Thamnophis ordinoides</option>
<option>Thamnophis proximus</option>
<option>Thamnophis radix</option>
<option>Thamnophis saurita</option>
<option>Thamnophis sirtalis</option>
<option>Trachemys gaigeae</option>
<option>Trachemys scripta</option>
<option>Trimorphodon lambda</option>
<option>Trimorphodon lyrophanes</option>
<option>Trioceros jacksonii</option>
<option>Tropidoclonion lineatum</option>
<option>Uma inornata</option>
<option>Uma scoparia</option>
<option>Urosaurus graciosus</option>
<option>Urosaurus ornatus</option>
<option>Uta stansburiana</option>
<option>Varanus komodoensis</option>
<option>Virginia striatula</option>
<option>Virginia valeriae</option>
<option>Xantusia henshawi</option>
<option>Xantusia riversiana</option>
<option>Xantusia vigilis</option>
<option>Xenopus laevis</option>
            </datalist>
            <input  autoComplete="on" list="suggestions" id = "snake_name"/> 
        </div>
        </div>
        <br />
        <div>
          <button>Upload</button>
        </div>
        <img src={this.state.imageURL} alt="img" />
      </form>
    );
  }
}

export default Uploader;