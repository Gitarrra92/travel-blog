import React from "react";
import "./style.css";

import Animation from "../../components/Animation/index";
import Description from "../../components/Description";
import Title from "../../components/Title";
import Socials from "../../components/Socials";

function AboutUs({ firstPar, secondPar, title }) {
  return (
    <>
      <Animation />
      <Socials />
      <Title title="about us" />
      <Description
        firstPar="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum leo in arcu suscipit, egestas volutpat nisl lobortis. Curabitur varius, leo vel hendrerit interdum, mauris velit sodales metus, eget vestibulum dolor purus eget massa. Suspendisse pulvinar mauris ut nibh faucibus, quis blandit lacus tincidunt. Proin vulputate auctor tempor. Pellentesque et ipsum vitae sapien ultricies tincidunt id ut turpis. Nullam condimentum, libero sed fermentum euismod, nulla felis lobortis est, et dictum lectus mauris quis ligula. Aenean venenatis arcu non velit convallis maximus. Cras non tempus elit, id aliquam enim. Praesent molestie nulla at congue tempor. Phasellus accumsan eros nisl, vitae bibendum eros vehicula eget.

Integer non aliquet quam. Sed turpis nibh, fermentum nec vulputate ut, dapibus ut est. Nulla id ante egestas, vehicula nisl vitae, ultricies nisi. Nullam id velit eget dui ultricies fringilla. Praesent sed velit ullamcorper, placerat risus eget, dictum nulla. Etiam imperdiet diam sed varius interdum. Nam tincidunt imperdiet nulla eget eleifend. Phasellus id malesuada mauris. Aliquam efficitur lectus tortor, id aliquam elit volutpat bibendum. Aenean id porta justo. Proin quis urna urna. Praesent ac euismod urna, id pretium lectus.

Morbi iaculis sodales dui cursus volutpat. Duis ac consectetur sapien. Nullam eu mattis ligula. Etiam sed hendrerit dui, aliquam imperdiet urna. Donec a mi non velit mattis aliquam facilisis a tellus. Integer mattis nisi quis semper varius. Suspendisse laoreet euismod vulputate."
        secondPar="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
    </>
  );
}

export default AboutUs;
