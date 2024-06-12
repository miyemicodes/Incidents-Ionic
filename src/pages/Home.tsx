import React, { useState } from "react";
import {
  IonContent,
  IonButton,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonChip,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { addCircleOutline } from "ionicons/icons";
import "./Home.css";
import { IncidentData } from "../model/incidence.interface";
import { useStoreContext } from "../store/Store-context";
import IncidentCard from './../components/IncidentCard'

const HomeComponent: React.FC = () => {
  const [incidentData, setIncidentData] = useState<IncidentData | null>(null);
  const { mainState } = useStoreContext();

  const handleIncidentSubmit = (data: IncidentData) => {
    setIncidentData(data);
  };

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
                <IonButton routerLink="/AddIncident">
                  <IonIcon slot="start" icon={addCircleOutline} />
                  Add Incident
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        {/* {incidentData && (
          <IonCard>
            <IonImg
              src={""}
              alt="The Wisconsin State Capitol building in Madison, WI at night"
            ></IonImg>

            <IonCardHeader>
              <IonCardTitle> {incidentData.title}</IonCardTitle>
              <IonCardSubtitle>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
              perferendis ut vel nihil fugiat, non placeat ducimus adipisci
              atque! Placeat ratione possimus ab fugit aspernatur, nostrum quos
              consectetur reprehenderit debitis?
            </IonCardContent>

            <IonGrid>
              <IonRow>
                <IonCol className="ion-text-left">
                  <IonChip color="medium">Category</IonChip>
                </IonCol>
                <IonCol className="ion-text-right">
                  <IonChip color="medium">Date-Time</IonChip>
                </IonCol>
              </IonRow>

              <div className="ion-text-center">
                <p>Location</p>
              </div>
            </IonGrid>
          </IonCard>
        )} */}

        {
          mainState?.map(incident => (
            <IncidentCard key={incident.id} {...incident} />
          ))
        }
      </IonContent>
    </IonPage>
  );
};
export default HomeComponent;
