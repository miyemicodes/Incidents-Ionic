import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonTextarea,
  IonText,
  IonInput,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonButton,
} from "@ionic/react";
import React from "react";

const AddIncident: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>REPORT INCIDENT</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonItem>
          <IonInput
            label="Incident"
            labelPlacement="floating"
            placeholder="Enter text"
          ></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel>Select Category</IonLabel>
          <IonSelect
            value=""
            placeholder="Categories"
            // onIonChange={(e) => setSelectedOption(e.detail.value)}
          >
            <IonSelectOption value="Fighting">Fighting</IonSelectOption>
            <IonSelectOption value="Accident">Accident</IonSelectOption>
            <IonSelectOption value="Riot">Riot</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonItem>
          <IonTextarea
            label="Description"
            labelPlacement="floating"
            placeholder="Enter description"
          >
            <div slot="label">
              Comments <IonText color="danger">(Required)</IonText>
            </div>
          </IonTextarea>
        </IonItem>

        <IonItem>
          <IonInput label="Add Image" labelPlacement="floating"></IonInput>
        </IonItem>

        <IonButton expand="block">Submit</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default AddIncident;
