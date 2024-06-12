import {
  IonContent,
  IonButton,
  IonHeader,
  IonPage,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonToolbar,
  IonIcon,
} from "@ionic/react";
import CardsControl from "../components/Cards";
import { addCircleOutline } from "ionicons/icons";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonGrid>
            <IonRow class="ion-justify-content-between">
              <IonCol className="ion-text-left">
                <IonTitle className="ion-padding">Home</IonTitle>
              </IonCol>
              <IonCol className="ion-text-right">
                <IonButton>
                  <IonIcon slot="start" icon={addCircleOutline} />
                  Add Incident
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <CardsControl />
      </IonContent>
    </IonPage>
  );
};

export default Home;
