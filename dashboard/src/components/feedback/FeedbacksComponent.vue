<template>
  <component-header text="Feedbacks"/>
  <AlertBox />
  <a class="btn btn-dark material-icons" style="float: right;" @click="downloadFeedbacks">download</a>
  <table class="table bg-dark text-info text-lg-start">
    <thead class="table-bordered">
    <tr class="text-info">
      <th scope="col">Factory Code</th>
      <th scope="col">Survey Code</th>
      <th scope="col">Feedback Message</th>
      <th scope="col">Action</th>
    </tr>
    </thead>
    <tbody class="table-bordered">
    <tr v-for="feedback in allFeedbacks" :key="feedback.id">
      <td>{{ feedback.factoryCode }}</td>
      <td>{{ feedback.surveyCode }}</td>
      <td class="roles-td">{{ feedback.content }}</td>
      <td>
        <a :data-bs-target="`#deleteFeedback_${feedback._id}`" data-bs-toggle="modal" href="javascript:void(0);">
          <span class="material-icons-outlined text-danger" title="Delete Feedback">delete</span>
        </a>
        <!-- Modal -->
        <div :id="`deleteFeedback_${feedback._id}`" aria-hidden="true" class="modal fade" tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content">

              <div class="modal-body text-danger">
                Are you sure you want to delete?
              </div>
              <div class="modal-footer">
                <button class="btn btn-danger" data-bs-dismiss="modal" type="button"
                @click="handleDeleteFeedback(feedback._id)">Yes
                </button>
                <button class="btn btn-secondary" data-bs-dismiss="modal" type="button">No</button>
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import ComponentHeader from "@/components/ComponentHeader";
import {mapActions, mapGetters} from "vuex";
import AlertBox from "@/components/util/AlertBox";

export default {
  name: "FeedbacksComponent",
  components: {
    ComponentHeader,
    AlertBox
  },
  methods: {
    ...mapActions(['fetchFeedback', 'deleteFeedback', 'downloadFeedbacks']),
    handleDeleteFeedback(feedbackId) {
      this.deleteFeedback(feedbackId);
      return true;
    },
  },
  mounted() {
    this.$store.dispatch('hideAlert');
    this.fetchFeedback();
  },

  created() {
  },

  computed: {
    ...mapGetters(['allFeedbacks', 'feedbackDeleteError', 'feedbackDeleteInfo', 'getServerErrorDisplayed'])
  }
}
</script>

<style scoped>

</style>